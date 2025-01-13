import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { FlexProps } from '../types/flex';
import { useFlex } from './useFlex';

describe('useFlex', () => {
  it('returns expected styles with all props provided', () => {
    const props: FlexProps = {
      alignContent: 'center',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      flex: '1 1 auto',
      flexBasis: 1,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1,
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'space-between',
    };

    const { result } = renderHook(() => useFlex(props));
    expect(result.current).toEqual({
      display: 'flex',
      alignContent: 'center',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      flex: '1 1 auto',
      flexBasis: '100px',
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1,
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'space-between',
    });
  });

  it('returns expected styles with some props missing', () => {
    const props: FlexProps = {
      flexDirection: 'column',
      justifyContent: 'center',
    };

    const { result } = renderHook(() => useFlex(props));
    expect(result.current).toEqual({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    });
  });

  it('returns expected styles with invalid prop types', () => {
    const props: FlexProps = {
      // @ts-expect-error: should expect a number
      flexDirection: ' invalid-value',
      // @ts-expect-error: should expect a string
      justifyContent: 123,
    };

    const { result } = renderHook(() => useFlex(props));
    expect(result.current).toEqual({
      display: 'flex',
      flexDirection: undefined,
      justifyContent: undefined,
    });
  });

  it('memoizes output with same props', () => {
    const props: FlexProps = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    };

    const { result, rerender } = renderHook(() => useFlex(props));
    const initialOutput = result.current;

    act(() => {
      rerender();
    });

    expect(result.current).toBe(initialOutput);
  });
});
