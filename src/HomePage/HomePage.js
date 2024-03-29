import SimpleImageSlider from "react-simple-image-slider";
import Content from '../content/Content';

export default function HomePage()
{
    const images = [
        { url: "slide1.jpg" },
        { url: "slide2.webp" },
        { url: "slide3.png" },
        
      ];
    return (<>
    <div className='slide'>
      <SimpleImageSlider
        width={1519}
        height={604}
        slideDuration={0.5}
        autoPlay={true}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
       <Content></Content>
    </>);
}