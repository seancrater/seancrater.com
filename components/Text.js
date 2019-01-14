/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { charcoal, colors } from '../styles/variables';

const styles = props => css({
    color: colors[props.color] || charcoal
});

const Text = props => (
    <props.type>
        {props.children}
    </props.type>
);

export default Text;