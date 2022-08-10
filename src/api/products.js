import { wait } from '@testing-library/user-event/dist/utils';
import { getCategories } from './categories'
import { getImages, postImage } from './images'
import { uploadImage } from './s3_images'
const baseURL = 'http://localhost:8080/'

var axios = require('axios');
var qs = require('qs');


const postProduct = async (product) => {

    var data = qs.stringify({
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'size': product.size,
        'id_category': product.category,
        'in_store': product.inStore,
        'available': product.available
    });

    var config = {
        method: 'post',
        url: 'http://localhost:8080/product',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    const response = await axios(config)
        .then( async function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    let index = 0
    const product_id = response.product_id
    for await (let img of product.images){
        await postImage(index, img, product_id)
        index++
    }

    console.log("waiting images")
    return response

}

const getProducts = async (page, limit, filter = '') => {
    try {
        const response = await fetch(baseURL + `product/pagination?page=${page}&limit=${limit}&filter=${filter}`, {
            method: "GET",
            redirect: 'follow'
        })
        const json = await response.json()
        const products = json.products
        const length = json.length

        if (products !== undefined && products !== []) {
            const categories = await getCategories()
            const images = await getImages()
            products.forEach(product => {
                let product_images = []
                categories.find(category => {
                    if (category.pk_category === product.fk_category_product) {
                        product.category_name = category.name
                        return true
                    }
                    return false
                })

                images.forEach(image => {
                    if (image.fk_product_images === product.pk_product) {
                        product_images.push(image)
                    }
                })

                product.images = product_images
            });
            console.log(length)
            return { products: products, length: length }
        }

    } catch (err) {
        console.error("ERROR: ", err)
    }
}

const deleteProducts = async (products) => {
    products.forEach(async id_product => {
        try {
            await fetch(baseURL + `product/${id_product}`, {
                method: "DELETE",
                redirect: 'follow'
            })

            return true
        } catch (err) {
            console.error(err)
            return false
        }

    })

    return true

}

export { getProducts, deleteProducts, postProduct }