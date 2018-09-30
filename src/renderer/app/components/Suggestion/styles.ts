import styled, { css } from 'styled-components';

import { body2, centerImage } from '@/mixins';
import { transparency } from '@/constants/renderer';

export const StyledSuggestion = styled.div`
  width: calc(100% - 16px);
  margin-left: 8px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  ${({ selected, hovered }: { selected: boolean; hovered: boolean }) => {
    let backgroundColor = 'transparent';

    if (selected) {
      backgroundColor = 'rgba(0, 0, 0, 0.06)';
    } else if (hovered) {
      backgroundColor = 'rgba(0, 0, 0, 0.03)';
    }

    return css`
      background-color: ${backgroundColor};
    `;
  }};
`;

export const PrimaryText = styled.div`
  ${body2()};
  margin-left: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  opacity: ${transparency.light.primaryText};
`;

export const SecondaryText = styled.div`
  ${body2()};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
  font-size: 13px;
  opacity: ${transparency.light.secondaryText};
`;

export const Icon = styled.div`
  margin-left: 16px;
  width: 16px;
  height: 16px;
  ${centerImage('16px', '16px')};
`;

export const Dash = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  opacity: ${transparency.light.secondaryText};
`;
