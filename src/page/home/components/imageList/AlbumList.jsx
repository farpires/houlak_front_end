import AlbumListTemp from './AlbumList.template';

const AlbumList = ({albums}) => {
    if (!albums) return;
    return AlbumListTemp(albums)
}
 
export default AlbumList;