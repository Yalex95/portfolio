import Slider from "./slider";

import bitbucket from '~/assets/bitbucket.svg'
import bootstrap from '~/assets/bootstrap.svg'
import css from '~/assets/css.svg'
 const Tech = () => {
    const techData = [
      { icon: bitbucket, tech: 'Tech 1' },
      { icon: bootstrap, tech: 'Tech 2' },
      { icon: css, tech: 'Tech 3' },
    ];
  
  return (
    <div id="tech">
      <Slider  totalSlides={3} />
    </div>
  );
};
export default Tech;