import { CommandBarButton, DefaultButton, IButtonProps, IButtonStyles, ICommandBarStyles } from "@fluentui/react";

interface ShareButtonProps extends IButtonProps {
    onClick: () => void;
  }

export const ShareButton: React.FC<ShareButtonProps> = ({onClick}) => {
    const shareButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
          width: 86,
          height: 32,
          borderRadius: 4,
          background: 'radial-gradient(109.81% 107.82% at 100.1% 90.19%, #0F6CBD 33.63%, #2D87C3 70.31%, #8DDDD8 100%)',
        //   position: 'absolute',
        //   right: 20,
          padding: '5px 12px',
          marginRight: '20px'
        },
        icon: {
          color: '#FFFFFF',
        },
        rootHovered: {
          background: 'linear-gradient(135deg, #0F6CBD 0%, #2D87C3 51.04%, #8DDDD8 100%)',
        },
        label: {
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          color: '#FFFFFF',
        },
      };

      return (
        <CommandBarButton
                styles={shareButtonStyles}
                iconProps={{ iconName: 'Share' }}
                onClick={onClick}
                text="Share"
        />
      )
}

interface HistoryButtonProps extends IButtonProps {
    onClick: () => void;
    text: string;
  }

export const HistoryButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
    const historyButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
          width: '220px',
          height: 32,
          borderRadius: 4,
          background: '#08198A',
        //   position: 'absolute',
        //   right: 20,
          padding: '5px 12px',
          marginRight: '20px'
        },
        icon: {
          color: '#FFFFFF',
        },
        rootHovered: {
          background: '#08198A',
        },
        label: {
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          color: '#FFFFFF',
        }
      };

      return (
        <CommandBarButton
            text={text}
            iconProps={{ iconName: 'History' }}
            onClick={onClick}
            styles={historyButtonStyles}
        />
      )
}

export const AddChatButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
  const addChatButtonStyles: ICommandBarStyles & IButtonStyles = {
      root: {
        width: '160px',
        height: 32,
        borderRadius: 4,
        background: '#08198A',
      //   position: 'absolute',
      //   right: 20,
        padding: '5px 12px',
        marginRight: '20px'
      },
      icon: {
        color: '#FFFFFF',
      },
      rootHovered: {
        background: '#08198A',
      },
      label: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        color: '#FFFFFF',
      }
    };

    return (
      <CommandBarButton
          text={text}
          iconProps={{ iconName: 'AddTo' }}
          onClick={onClick}
          styles={addChatButtonStyles}
      />
    )
}

export const InfoButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
  const infoButtonStyles: ICommandBarStyles & IButtonStyles = {
      root: {
        width: '160px',
        height: 32,
        borderRadius: 4,
        //borderColor: '#08198A', 
        //borderStyle: 'solid',
        background: '#F2F2F2',
      //   position: 'absolute',
      //   right: 20,
        padding: '5px 12px',
        marginRight: '20px'
      },
      icon: {
        color: '#08198A',
      },
      rootHovered: {
        background: '#FFFFFF',
      },
      label: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        color: '#08198A',
      }
    };

    return (
      <CommandBarButton
          text={text}
          iconProps={{ iconName: 'Info' }}
          onClick={onClick}
          styles={infoButtonStyles}
      />
    )
}

export const SecurityButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
  const infoButtonStyles: ICommandBarStyles & IButtonStyles = {
      root: {
        width: '320px',
        height: 32,
        borderRadius: 4,
        background: '#FFFFFF',
      //   position: 'absolute',
      //   right: 20,
        padding: '5px 12px',
        marginRight: '20px'
      },
      icon: {
        color: '#352F91',
      },
      rootHovered: {
        background: '#352F91',
      },
      label: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        color: '#FFFFFF',
      }
    };

    return (
      <CommandBarButton
          text={text}
          iconProps={{ iconName: 'Info' }}
          onClick={onClick}
          styles={infoButtonStyles}
      />
    )
}