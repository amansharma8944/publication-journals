import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    
    return (
        <footer className='w-[full] flex  mt-[15vh] pt-[5vh] bg-[#e9e7e7]'>
            <div className='flex-[1] px-[15px] border-r-[1px] border-[black] pl-[23px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>ABOUT US</h1>
                <p className='text-justify  w-[83%] tracking-[.5px] leading-[33px]'>
                    Publications Division is a repository of books and journals highlighting subjects of national importance and India’s rich cultural heritage. Established in 1941, Publications Division has emerged as a premier publishing house of the Government of India, enriching the national knowledge repository in distinctive streams as under : ....


                </p>
                <button className='mt-[10vh]'>more</button>

            </div>
            <div className='flex-[0.5] px-[15px] border-r-[1px] border-[black] ml-[5px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>Related sites</h1>
                <ul>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">DPD JOURNALS</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Employment News Website</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Ministry of I & B</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">News On AIR</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Press Information Bureau</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">DD News</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Film Division</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Bureau of Outreach & Communication</a>
                    </li>
                </ul>


            </div>
            <div className='flex-[1] px-[15px] border-r-[1px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>Information</h1>
                <ul>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Photo Gallery</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Video Gallery</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Events And Higlights</a>
                    </li>
                   
                </ul>
                <h1 className='font-[450] text-[22px] text-[green] my-[30px]'>Get In Touch</h1>
                <ul className='flex'>
                    <li><InstagramIcon sx={{
                        height:"35px",
                        width:"35px",
                        "&:hover":{
                            color:"purple",
                         cursor:"pointer"
                        }
                    
                    }}/></li>
                    <li><TwitterIcon
                     sx={{
                        height:"35px",
                        width:"35px",
                        marginLeft:"25px",
                        "&:hover":{
                            color:"#1DA1F2"
                        }
                    
                    }}/></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer