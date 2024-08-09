import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sort-popup";

export const TopBar = ({className}) => {
    return (
        <div className={cn('sticky bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className='flex justify-between items-center'>
                <Categories/>
                <SortPopup/>
            </Container>
        </div>
    );
};