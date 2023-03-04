import './Loader.styled.js';
import { MdOutlineCameraswitch } from 'react-icons/md';

// взяли иконку из реакт-айкон и просто ей прикрутили анимацию и дали клас

function Loader() {
  return (
    <div className="wrapper">
      <MdOutlineCameraswitch className="loader" />
    </div>
  );
}

export default Loader;
