
//import { ExtHostWebviewsShape, IMainContext, MainContext, MainThreadWebviewsShape, WebviewPanelHandle, WebviewPanelViewStateData, MainThreadEWindowShape } from './extHost.protocol';
import { ExtHostEWindowShape, IMainContext, MainThreadEWindowShape, MainContext } from './extHost.protocol';



export class ExtHostEWindow implements ExtHostEWindowShape {
	_proxy:MainThreadEWindowShape;
	constructor(mainContext: IMainContext) {
		this._proxy = mainContext.getProxy(MainContext.MainThreadEWindow);
	}
	public $openEWindow(
	): void {
		console.log('openEWindow.debug........................................');
		this._proxy.$openEWindow();
	}
}
