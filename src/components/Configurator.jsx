import { useCustomization } from '../context/Customization';
import '../App.css';
import ColorPicker from './ColorPicker';
import Vehicle from './Vehicle';

const Configurator = () => {
    const { overlay, setOverlay } = useCustomization();

    return (
        <div className='configurator'>
            <div className='configurator__section'>
            <div className='configurator__section__title'>
                Select Make & Model
               </div>
               <div className='configurator__section'>
               <Vehicle />
               </div>
                <div className='configurator__section__title'>
                    Car Material
                </div>
                <div className='configurator__section__values'>
                <div className={`item ${overlay === 1 ? 'item--active' : ''}`} onClick={() => setOverlay(1)}>
                        <div className='item__label'>Raven</div>
                    </div>
                    <div className={`item ${overlay === 2 ? 'item--active' : ''}`} onClick={() => setOverlay(2)}>
                        <div className='item__label'>Slaughter</div>
                    </div>
                    <div className={`item ${overlay === 3 ? 'item--active' : ''}`} onClick={() => setOverlay(3)}>
                        <div className='item__label'>Bat Lady</div>
                    </div>
                    <div className={`item ${overlay === 4 ? 'item--active' : ''}`} onClick={() => setOverlay(4)}>
                        <div className='item__label'>Brake Line</div>
                    </div>
                    <div className={`item ${overlay === 5 ? 'item--active' : ''}`} onClick={() => setOverlay(5)}>
                        <div className='item__label'>Danger Inside</div>
                    </div>
                    <div className={`item ${overlay === 6 ? 'item--active' : ''}`} onClick={() => setOverlay(6)}>
                        <div className='item__label'>Embers</div>
                    </div>
                    <div className={`item ${overlay === 7 ? 'item--active' : ''}`} onClick={() => setOverlay(7)}>
                        <div className='item__label'>Spider ID</div>
                    </div>
                    <div className={`item ${overlay === 8 ? 'item--active' : ''}`} onClick={() => setOverlay(8)}>
                        <div className='item__label'>Fluid</div>
                    </div>
                    <div className={`item ${overlay === 9 ? 'item--active' : ''}`} onClick={() => setOverlay(9)}>
                        <div className='item__label'>Hot Rods</div>
                    </div>
                    <div className={`item ${overlay === 10 ? 'item--active' : ''}`} onClick={() => setOverlay(10)}>
                        <div className='item__label'>Mayan</div>
                    </div>
                    <div className={`item ${overlay === 11 ? 'item--active' : ''}`} onClick={() => setOverlay(11)}>
                        <div className='item__label'>Sea Breeze</div>
                    </div>
                    <div className={`item ${overlay === 12 ? 'item--active' : ''}`} onClick={() => setOverlay(12)}>
                        <div className='item__label'>Shape Shifter</div>
                    </div>
                    <div className={`item ${overlay === 13 ? 'item--active' : ''}`} onClick={() => setOverlay(13)}>
                        <div className='item__label'>Silk</div>
                    </div>
                    <div className={`item ${overlay === 14 ? 'item--active' : ''}`} onClick={() => setOverlay(14)}>
                        <div className='item__label'>Snake Skin</div>
                    </div>
                    <div className={`item ${overlay === 15 ? 'item--active' : ''}`} onClick={() => setOverlay(15)}>
                        <div className='item__label'>Solar Flare</div>
                    </div>
                    <div className={`item ${overlay === 16 ? 'item--active' : ''}`} onClick={() => setOverlay(16)}>
                        <div className='item__label'>Dominator</div>
                    </div>
                    <div className={`item ${overlay === 17 ? 'item--active' : ''}`} onClick={() => setOverlay(17)}>
                        <div className='item__label'>Top Gun</div>
                    </div>
                    <div className={`item ${overlay === 18 ? 'item--active' : ''}`} onClick={() => setOverlay(18)}>
                        <div className='item__label'>Water Explosion</div>
                    </div>
                    <div className={`item ${overlay === 19 ? 'item--active' : ''}`} onClick={() => setOverlay(19)}>
                        <div className='item__label'>Wild West</div>
                    </div>
                    <div className={`item ${overlay === 20 ? 'item--active' : ''}`} onClick={() => setOverlay(20)}>
                        <div className='item__label'>Zombie</div>
                    </div>
                 </div>
            </div>
            <div className='configurator__section__title'>
                Car Color
            </div>
            <div>
            <ColorPicker />
               </div>
              
        </div>
        
    )
    
}


export default Configurator
