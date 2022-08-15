import React from 'react'

const ImageSelect = ({ images, value, noSelectionLabel, onValueChange }: ImageSelectProps) => {

    const bannersDOM = images.map((image, index) =>
        <img key={image} src={image} alt='banner'
            className={image === value ? 'selected' : ''}
            onClick={() => onValueChange(index)} />
    );

    return (
        <div>
            <div className={['no-selection', value === '' ? 'selected' : ''].join(' ')} onClick={() => onValueChange(-1)}>
                {noSelectionLabel}
            </div>
            {bannersDOM}
        </div>
    )
}

export default ImageSelect;

type ImageSelectProps = {
    images: string[];
    value: string;
    noSelectionLabel: string;
    onValueChange: (id: number) => void;
};
