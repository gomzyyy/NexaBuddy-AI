import type { Customer, Product } from "../types";
import {QuantityType} from "../enums"

type DummyData={
  totalSales:string;
  totalUdhars:string;
  customers:Customer[]
}

const sampleProducts: Product[] = [
  {
    id: '101',
    name: 'Rice',
    image: undefined,
    totalSold:34,
    basePrice: '50',
    discountedPrice: '45',
    quantity: '5',
    measurementType: QuantityType.KILOGRAMS,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '102',
    name: 'Milk',
    image: undefined,
    totalSold:34,
    basePrice: '60',
    discountedPrice: '55',
    quantity: '2',
    measurementType: QuantityType.LITRE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '103',
    name: 'Sugar',
    image: undefined,
    totalSold:34,
    basePrice: '40',
    discountedPrice: '38',
    quantity: '3',
    measurementType: QuantityType.KILOGRAMS,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const d:DummyData = {
  totalSales: '3240',
  totalUdhars: '980',
  customers: [
    { id: '1', fullName: 'Rohit Kumar', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '2', fullName: 'Amit Sharma', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '3', fullName: 'Neha Verma', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '4', fullName: 'Vikas Gupta', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '5', fullName: 'Priya Singh', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '6', fullName: 'Manish Yadav', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '7', fullName: 'Anjali Mehta', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '8', fullName: 'Suresh Patel', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '9', fullName: 'Ritu Chawla', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '10', fullName: 'Sanjay Thakur', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
    { id: '11', fullName: 'Kavita Joshi', image: undefined, shopkeeperId:"1", unpaidPayments: sampleProducts, paidPayments: [], createdAt: new Date(), updatedAt: new Date() },
  ]
};

export {d,sampleProducts};
