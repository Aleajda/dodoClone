import React from 'react';
import {ProductCard} from "@/components/shared/product-card";
import {Title} from "@/components/shared/title";

interface Props {
    className?: string;
    title: string;
    items: any;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
    className,
    title,
    items,
    listClassName,
    categoryId
}) => {
    return (
        <div className={className}>
            <Title text={title} size='lg' className='font-extrabold mb-5'/>

            <div className='grid grid-cols-3 gap-[50px]'>
                {items.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};
