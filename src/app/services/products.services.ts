import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class  ProductsServices {
    
    constructor( private http:HttpClient ) {}

    getProducts(){
        return this.http.get<any>('http://18.219.41.193:4000/api/products')
    }
    getproductById(id: string){
        return this.http.get<any>(`http://18.219.41.193:4000/api/products/${id}`)
    }
    UpdateProductById(id:string, newProduct:any){
        return this.http.patch<any>(`http://18.219.41.193:4000/api/products/${ id }`, newProduct)
    }
    createProduct(newProduct:any){
        return this.http.post<any>('http://18.219.41.193:4000/api/products', newProduct)
    }
    getCategories() {
        return this.http.get<any>('http://18.219.41.193:4000/api/categorys'  );
    }
    
}

    