import PhotographyGallery from '../../components/photographyGallery';
import '../page.css';

export const metadata = {
    title: 'Photography — Leo Tuan Dinh',
    description: 'A collection of photographs by Leo Tuan Dinh.'
};

function Photography() {
    return (
        <div className="photography-page">
            <div className="photography-page-heading">
                <span>Photography</span>
                <span>Frames from the way around.</span>
            </div>
            <PhotographyGallery />
        </div>
    );
}

export default Photography;
