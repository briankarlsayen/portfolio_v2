import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface INavigationContextProp {
  nav: INavigationContext;
}

export interface INavigationUpdate {
  title: string;
  showBackButton?: boolean;
  mainActionLabel?: string;
  backButtonConfirmationMsg?: string;
  onMainAction?: () => void;
}

export interface INavigationContext {
  updateNavigation: (update: INavigationUpdate) => void;
  goBack: () => void;
  goTo: (url: string) => void;
}

export const NavigationContext = React.createContext<INavigationContext>(
  null as any
);

export function withNavigationContext<
  TComponentProps extends INavigationContextProp
>(Component: React.ComponentType<TComponentProps>) {
  return function NavigationContextComponent(
    props: Pick<
      TComponentProps,
      Exclude<keyof TComponentProps, keyof INavigationContextProp>
    >
  ) {
    const navigate = useNavigate();
    const newNav = {
      goBack: () => navigate('/projects/1'),
    };

    return (
      <NavigationContext.Consumer>
        {() => (
          <Component
            {...(props as TComponentProps)}
            nav={newNav}
            ping={() => console.log('ping')}
            // history={history}
          />
        )}
      </NavigationContext.Consumer>
    );
  };
}
