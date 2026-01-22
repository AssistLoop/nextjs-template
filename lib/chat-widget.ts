export const openChatWidget = (): void => {
  if (typeof window !== 'undefined') {
    const assistLoopWidget = (window as typeof window & {
      AssistLoopWidget?: {
        init: () => { toggle?: () => void };
      };
    }).AssistLoopWidget;
    
    if (assistLoopWidget) {
      const widgetInstance = assistLoopWidget.init();
      if (widgetInstance && widgetInstance.toggle) {
        widgetInstance.toggle();
      }
    }
  }
};
