import { ColorRing } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled';



const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#4169E1', '#FFEA00',
        '#4169E1', 
        '#FFEA00',
        '#4169E1',
        '#89CFF0']}
      />
    </LoaderWrapper>
  );
};

export default Loader;

