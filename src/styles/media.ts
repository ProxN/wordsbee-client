const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  giant: customMediaQuery(1440),
  bigDesktop: customMediaQuery(1200),
  desktop: customMediaQuery(1000),
  tablet: customMediaQuery(768),
  thone: customMediaQuery(600),
  phablet: customMediaQuery(480),
  phone: customMediaQuery(376),
  tiny: customMediaQuery(330),
};

export default media;
