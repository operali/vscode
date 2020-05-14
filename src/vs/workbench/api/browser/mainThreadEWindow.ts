/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as extHostProtocol from 'vs/workbench/api/common/extHost.protocol';
import { IExtensionService } from 'vs/workbench/services/extensions/common/extensions';
import { extHostNamedCustomer } from '../common/extHostCustomers';
import { ICommandService } from 'vs/platform/commands/common/commands';


@extHostNamedCustomer(extHostProtocol.MainContext.MainThreadEWindow)
export class MainThreadEWindow implements extHostProtocol.MainThreadEWindowShape {
	constructor(extHostContext: extHostProtocol.IExtHostContext,
		@ICommandService private readonly _commandService: ICommandService,
		@IExtensionService private readonly _extensionService: IExtensionService) {
		console.log('_commandService', this._commandService);
		console.log('_extensionService', this._extensionService);
	}
	$openEWindow() {
		console.log('MainThreadEWindow.openEWindow.debug.....................');
	}

	dispose(): void {

	}
}
