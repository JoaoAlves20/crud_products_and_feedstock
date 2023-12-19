import { Injectable } from '@nestjs/common';

import { supabase } from '../supabase/supabase';

import type { Product, BodyProduct } from '../interfaces/ProductInterface';

@Injectable()
export class ProductsService {
  async create(body: BodyProduct) {
    const {
      data: product,
      error: productError,
    }: {
      data: Product[] | null;
      error: any;
    } = await supabase
      .from('products')
      .insert([
        {
          name: body.name,
          date_production: body.date_production,
          price: body.price,
        },
      ])
      .select();

    return productError ? productError : product;
  }

  async findAll() {
    const {
      data: product,
      error: productError,
    }: {
      data: Product[] | null;
      error: any;
    } = await supabase.from('products').select('*');

    return productError ? productError : product;
  }

  async findById(id: number) {
    const {
      data: product,
      error: productError,
    }: {
      data: Product[] | null;
      error: any;
    } = await supabase.from('products').select('*').eq('id', id);

    return productError ? productError : product;
  }

  async findByNameAndDate(body: BodyProduct) {
    const {
      data: product,
      error: productError
    }: {
      data: Product[] | null;
      error: any
    } = await supabase
      .from('products')
      .select('*')
      .eq('name', body.name)
      .eq('date_production', body.date_production)

    return productError ? productError : product
  }

  async update(id: number, body: BodyProduct) {
    const {
      data: product,
      error: productError
    }: {
      data: Product[] | null;
      error: any
    } = await supabase
      .from('products')
      .update({
        name: body.name,
        date_production: body.date_production,
        price: body.price
      })
      .eq('id', id)
      .select()

    return productError ? productError : product
  }

  async remove(id: number) {
    const {
      data: product,
      error: productError
    }: {
      data: Product[] | null;
      error: any
    } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    return productError ? productError : product
  }
}
