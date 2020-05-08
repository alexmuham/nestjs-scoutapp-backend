import {ObservableInput} from 'rxjs';
import {BadRequestException, UnauthorizedException} from '@nestjs/common';
import ScoutAppError from 'ScoutAppError';
import ScoutAppAuthError, {ScoutAppErrorType} from 'managers/auth/ScoutAppAuthError';

function processAuthError(error: ScoutAppAuthError) {
  switch (error.type) {
    case ScoutAppErrorType.TokenExpired:
    case ScoutAppErrorType.AuthFailed:
    case ScoutAppErrorType.RefreshFailed:
      throw new UnauthorizedException(error.message);
  }
}

export function processError(error: any): ObservableInput<any> {
  if (error instanceof ScoutAppError) {
    if (error instanceof ScoutAppAuthError) {
      processAuthError(error);
    }
    throw new BadRequestException(error.message);
  } else {
    throw error;
  }
}
