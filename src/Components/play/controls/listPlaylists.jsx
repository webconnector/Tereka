import React, {useContext} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {PLAYLISTS_AUDIOS} from '../../../Graphql/query';
import {ADDTO_PLAYLIST} from '../../../Graphql/mutations';
import Loading from '../../../Views/loading/loading';
import folderSVG from '../svg/folders.svg';
import {AuthContext} from '../../../Context/authContext';

const List = ({setActive, title, Id, audioID}) => {
  const context = useContext(AuthContext);
  const [AddToPlaylist, {loading, error}] = useMutation(ADDTO_PLAYLIST, {
    update(cache, {data: {AddToPlaylist}}) {
      const data = cache.readQuery({
        query: PLAYLISTS_AUDIOS,
        variables: {uid: context.user.UserId.toString(), pid: Id},
      });

      cache.writeQuery({
        query: PLAYLISTS_AUDIOS,
        variables: {uid: context.user.UserId.toString(), pid: Id},
        data: {playlist_Audios: [...data.playlist_Audios, AddToPlaylist]},
      });
    },
  });

  if (error) {
    console.log('Error adding to the Playlist', error);
    return null;
  }

  const handleClick = () => {
    console.log('Variables are Pid $1 and audioID $2', Id, audioID);

    if (context.user) {
      AddToPlaylist({
        variables: {
          uid: context.user.UserId.toString(),
          pid: Id,
          audioID: audioID,
        },
      });
    }

    setActive(false);
  };

  return (
    <li class="hover:bg-green-300" onClick={handleClick}>
      <div class="flex items-center p-2 border-b">
        <img src={folderSVG} alt="folderSVG" />
        <div class="ml-2 text-gray-700 font-medium text-sm">{title} </div>
        {loading ? <Loading /> : null}
      </div>
    </li>
  );
};

export default List;
