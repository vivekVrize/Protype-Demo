import { ApplicationConfig, provideBrowserGlobalErrorListeners, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { SeedDataService } from './core/database/seed-data.service';
import { db } from './core/database/db';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

function initializeApp(seedDataService: SeedDataService) {
  return async () => {
    const userCount = await db.users.count();
    if (userCount === 0) {
      await seedDataService.seedDatabase();
      console.log('✅ Database initialized with demo data');
    } else {
      console.log('ℹ️ Database already initialized');
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SeedDataService],
      multi: true
    }
  ]
};
