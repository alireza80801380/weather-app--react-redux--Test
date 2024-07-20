import moment from "moment-jalaali"
import { useEffect, useState } from "react"


const weekend = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
]
const yearMonth =  [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]



const PersianDate = ()=>{

    const [data , setdata] = useState('')
    const [time , settime] = useState('')

    useEffect(()=>{
        const m = moment()
        let datas = `${weekend[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ${m.jYear()}`
        setdata(datas)
        settime(m.format("HH:mm"))
    },[])


    return(
        <>
            <span className='mb-3 d-block text-center'>{data}</span>
            <span className='d-block text-center'>ساعت {time}</span>
        </>
    )
}



export default PersianDate