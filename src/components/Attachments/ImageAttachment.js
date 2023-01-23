import { Box } from '@rocket.chat/fuselage';
import React from 'react';
import PropTypes from 'prop-types';

const ImageAttachment = ({ attachment }) => (
  <Box>
    <p>{attachment?.description}</p>
    <img
      src={`http://localhost:3000${attachment.image_url}`}
      height={attachment?.image_dimensions?.height ?? 357}
      width={attachment?.image_dimensions?.width ?? 476}
      style={{ maxWidth: '100%', objectFit: 'cover' }}
    />
  </Box>
);

export default ImageAttachment;

ImageAttachment.propTypes = {
  attachment: PropTypes.object,
};
