import { CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {
    canActivate(): boolean {
        return true;
    }
}
