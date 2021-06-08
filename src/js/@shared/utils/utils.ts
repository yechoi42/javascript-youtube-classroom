const $ = (selector: string): HTMLElement | null => document.querySelector(selector);

const $$ = (selector: string): NodeList | null => document.querySelectorAll(selector);

const wait = async (delay: number): Promise<number> => {
  return new Promise<number>((resolve) => setTimeout(resolve, delay));
};

const removeChildNodes = (element: HTMLElement | null):void => {
  while (element?.hasChildNodes()) {
    console.log(element?.hasChildNodes())
    element?.removeChild( element.childNodes[0] );
  }
}

export { $, $$, wait, removeChildNodes };
