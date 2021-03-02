import React from 'react';
import { Progress } from 'semantic-ui-react';

export const ProgressBar = ({value, label, total = '100', type = 'ratio'}) => <Progress value={ value } total={ total } progress={ type } indicating label={ label } />
