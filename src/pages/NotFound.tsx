import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white light:bg-slate-50 light:text-slate-900">
      <Container className="flex min-h-screen items-center justify-center">
        <div className="card-surface max-w-xl p-8 text-center">
          <p className="section-badge mx-auto">404</p>
          <h1 className="mt-6 text-4xl font-semibold light:text-slate-900">Page not found</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-600">
            The route you opened does not exist. Return to the portfolio and continue exploring.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/portfolio/" variant="accent">
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
