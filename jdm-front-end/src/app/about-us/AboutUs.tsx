'use client'

import Container from '@/ui/Container'
import Heading from '@/ui/Heading'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { Divider } from 'antd'

const AboutUs = () => {
  return (
    <div className='py-10'>
      <Container>
        <Heading className='text-center mb-5'>About us</Heading>
        <YMaps>
          <div className='flex flex-col'>
            <h3 className='font-semibold'>Moscow</h3>
            <Divider/>
            <div className='mb-10 flex justify-between'>
              <div>
                <div className='mb-5'>
                  <h4 className='mb-2'>Мы расположены по адресу:</h4>
                  <p>В Химках: ул. Союзная, стр. 4 (Офис Emex)</p>
                  <p>Время работы: с 11-30 до 19-30 (вс и пн - выходные)</p>
                  <p>Электронная почта: sales@jdmpower.ru</p>
                  <p>Телефон: +7 985 933 53 32</p>
                </div>
                <div>
                  <h4 className='mb-2'>В Москве: ул. Авиамоторная, д. 73А, стр. 10</h4>
                  <p>Время работы: с 11-00 до 21-00 (вс - выходной)</p>
                  <p>Электронная почта: sales@jdmpower.ru</p>
                  <p>Телефон: +7 919 102 52 17</p>
                </div>
              </div>
              <Map defaultState={{ center: [55.789344, 37.565788], zoom: 10 }} width={600} height={500}>
                <Placemark properties={
                  {
                    iconCaption: 'JDM Power',
                  }
                } defaultGeometry={[55.896693, 37.444972]} />
                <Placemark properties={
                  {
                    iconCaption: 'JDM Power Сервис',
                  }
                } defaultGeometry={[55.735256, 37.724184]} />
              </Map>
            </div>
            <h3 className='font-semibold'>Krasnodar</h3>
            <Divider/>
            <div className='flex justify-between'>
            <div>
                <div className='mb-5'>
                  <h4 className='mb-2'>Мы расположены по адресу:</h4>
                  <p>В Краснодаре: Ул. Филатова д.19</p>
                  <p>Время работы: с 11-00 до 21-00</p>
                  <p>Электронная почта: jdmpower-denis@yandex.ru</p>
                  <p>Телефон: +7 928 880 72 52</p>
                </div>
              </div>
              <Map defaultState={{ center: [45.035740, 39.015544], zoom: 14 }} width={600} height={500}>
                <Placemark properties={
                  {
                    iconCaption: 'JDM Power Краснодар',
                  }
                } defaultGeometry={[45.035740, 39.015544]} />
              </Map>
            </div>
          </div>
        </YMaps>
      </Container>
    </div>
  )
}

export default AboutUs;
