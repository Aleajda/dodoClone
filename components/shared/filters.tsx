
import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkcox";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/ui/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";

export const Filters = () => {

    return (
        <div>

            {/*Чекбоксы сверху*/}
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>

            {/*Выбор цены*/}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={30000} defaultValue={0}/>
                    <Input type='number' placeholder='1000' min={100} max={1000}/>
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
            </div>

            {/*  Чекбоксы снизу  */}
            <div>
                <CheckboxFiltersGroup
                    title="Ингридиенты"
                    items={[
                        {
                            text: 'Сырный соус',
                            value: '1'
                        },
                        {
                            text: 'Моцарелла',
                            value: '2'
                        },
                        {
                            text: 'Чеснок',
                            value: '3'
                        },
                        {
                            text: 'Соленые огурчики',
                            value: '4'
                        },
                        {
                            text: 'Красный лук',
                            value: '5'
                        },
                        {
                            text: 'Томаты',
                            value: '6'
                        },
                        {
                            text: 'Сырный соус',
                            value: '1'
                        },
                        {
                            text: 'Моцарелла',
                            value: '2'
                        },
                        {
                            text: 'Чеснок',
                            value: '3'
                        },
                        {
                            text: 'Соленые огурчики',
                            value: '4'
                        },
                        {
                            text: 'Красный лук',
                            value: '5'
                        },
                        {
                            text: 'Томаты',
                            value: '6'
                        },
                        {
                            text: 'Сырный соус',
                            value: '1'
                        },
                        {
                            text: 'Моцарелла',
                            value: '2'
                        },
                        {
                            text: 'Чеснок',
                            value: '3'
                        },
                        {
                            text: 'Соленые огурчики',
                            value: '4'
                        },
                        {
                            text: 'Красный лук',
                            value: '5'
                        },
                        {
                            text: 'Томаты',
                            value: '6'
                        },
                    ]}
                    defaultItems={[
                        {
                            text: 'Сырный соус',
                            value: '1'
                        },
                        {
                            text: 'Моцарелла',
                            value: '2'
                        },
                        {
                            text: 'Чеснок',
                            value: '3'
                        },
                        {
                            text: 'Соленые огурчики',
                            value: '4'
                        },
                        {
                            text: 'Красный лук',
                            value: '5'
                        },
                        {
                            text: 'Томаты',
                            value: '6'
                        },

                    ]}
                    className='mt-5'/>
            </div>
        </div>
    );
};
