import  React  from 'react';
import './ImageLinkform.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className="f3 white">
             {'This Magic Brain will detect faces in your pictures.'}   
            </p> 
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-80 ' type="text" placeholder="Insert your image link here"
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "Insert your image link here"}  
                    onChange={onInputChange}
                    />
                    <button 
                        className=' grow f4 link pv2 db white bg-light-purple'
                        onClick={onPictureSubmit}
                    >DETECT</button>
                </div>
            </div>

        </div>

    )
}

export default ImageLinkForm;