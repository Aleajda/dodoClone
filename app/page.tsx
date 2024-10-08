import {Container, Filters, ProductCard, ProductsGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
  return (
      <>
          <Container className="mt-10">
              <Title text="Все пиццы" size="lg" className="font-extrabold"/>
          </Container>
          <TopBar/>
          <Container className='mt-10 pb-14'>
              <div className='flex gap-[80px]'>

                  {/*Фильтрация*/}
                  <div className='w-[250px]'>
                      <Filters/>
                  </div>

                  {/*Список товаров*/}
                  <div className='flex-1'>
                      <div className='flex flex-col gap-16'>
                         <ProductsGroupList title='Пиццы' items={[
                             {
                                 id: 1,
                                 name: 'Пепперони фреш',
                                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                 price: 329,
                                 items: [{price: 329}]
                             },
                             {
                                 id: 2,
                                 name: 'Пепперони фреш',
                                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                 price: 329,
                                 items: [{price: 329}]
                             },
                             {
                                 id: 3,
                                 name: 'Пепперони фреш',
                                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                 price: 329,
                                 items: [{price: 329}]
                             },
                             {
                                 id: 4,
                                 name: 'Пепперони фреш',
                                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                 price: 329,
                                 items: [{price: 329}]
                             },
                             {
                                 id: 5,
                                 name: 'Пепперони фреш',
                                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                 price: 329,
                                 items: [{price: 329}]
                             },
                             {
                                 id: 6,
                                 name: 'Пепперони фреш',
                                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                 price: 329,
                                 items: [{price: 329}]
                             },

                         ]} categoryId={1}/>
                      </div>
                  </div>
              </div>
          </Container>
      </>
  );
}
