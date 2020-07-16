import { ReactComponent as IconOverview } from '../../assets/icons/overview.svg';
import { ReactComponent as IconLibrary } from '../../assets/icons/library.svg';
import { ReactComponent as IconSettings } from '../../assets/icons/settings.svg';
import { ReactComponent as Iconlogout } from '../../assets/icons/logout.svg';
import { ReactComponent as IconBooks } from '../../assets/icons/books.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/edit.svg';
import { ReactComponent as IconTrash } from '../../assets/icons/trash.svg';
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';
import { ReactComponent as IconArrowDown } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as IconSound } from '../../assets/icons/sound.svg';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import { ReactComponent as IconBook } from '../../assets/icons/book.svg';
import { ReactComponent as IconServer } from '../../assets/icons/server.svg';

const icons: { [key: string]: React.FC } = {
  overview: IconOverview,
  library: IconLibrary,
  logout: Iconlogout,
  settings: IconSettings,
  books: IconBooks,
  edit: IconEdit,
  delete: IconTrash,
  search: IconSearch,
  arrowdown: IconArrowDown,
  sound: IconSound,
  close: IconClose,
  book: IconBook,
  server: IconServer,
};

export default icons;
