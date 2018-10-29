import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DeleteVault} from '../model/DeleteVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteVaultInput} from '../types/DeleteVaultInput';
import {DeleteVaultOutput} from '../types/DeleteVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DeleteVaultCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteVaultInput,
    OutputTypesUnion,
    DeleteVaultOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteVaultInput,
        DeleteVaultOutput,
        Blob
    >();

    constructor(readonly input: DeleteVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<DeleteVaultInput, DeleteVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteVault
        };

        return stack.resolve(
            handler<DeleteVaultInput, DeleteVaultOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}