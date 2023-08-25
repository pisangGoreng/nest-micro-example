import { AuthGuard } from '@nestjs/passport';

// * ini otomatis ngebaca LocalStrategy 'local' yang udh dibuat
export class LocalAuthGuard extends AuthGuard('local') {}
