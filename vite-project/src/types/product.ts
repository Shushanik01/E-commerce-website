export interface productData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating :{
        rate: number,
        count: number
    }
};

// export type RootState = ReturnType<typeof store.getState>