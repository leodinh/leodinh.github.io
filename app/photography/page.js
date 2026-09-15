import PhotographyGallery from '@/components/photographyGallery';
import '@/styles/photography.css';

export const metadata = {
    title: 'Photography — Leo Tuan Dinh',
    description: 'A collection of photographs by Leo Tuan Dinh.'
};

function Photography() {
    return (
        <div className="photography-page">
            <div className="photography-page-heading">
                <h1>Photography</h1>
                <p>Frames from the way around.</p>
            </div>
            <PhotographyGallery />
        </div>
    );
}

export default Photography;
