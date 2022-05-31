import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class RolesGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean {
        const { role } = context.switchToHttp().getRequest().headers

        if (role !== 'admin') {
            throw new UnauthorizedException()
        }

        return true
    }
}