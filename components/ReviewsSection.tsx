import { Icon } from "./Icon";
import type { Review, RatingBreakdown } from "@/lib/types";

function Bar({ label, value }: { label: string; value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <div className="flex items-center justify-between">
      <span className="text-on-surface-variant">{label}</span>
      <div className="flex items-center gap-2 w-1/2">
        <div className="h-1 bg-outline-variant/40 rounded-full w-full overflow-hidden">
          <div className="h-1 bg-primary rounded-full" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-caption tabular-nums">{value.toFixed(1)}</span>
      </div>
    </div>
  );
}

/** Property-page reviews block: rating summary, category bars, review cards. */
export function ReviewsSection({
  rating,
  reviewCount,
  breakdown,
  reviews,
}: {
  rating: number | null;
  reviewCount: number | null;
  breakdown: RatingBreakdown;
  reviews: Review[];
}) {
  return (
    <div id="reviews" className="border-t border-outline-variant/20 pt-stack-lg scroll-mt-28">
      <div className="flex items-center gap-2 mb-8">
        <Icon name="star" className="text-2xl text-primary" filled />
        <h3 className="font-headline-sm text-headline-sm">
          {rating != null ? rating.toFixed(2) : "New"}
          {reviewCount != null && ` · ${reviewCount} reviews`}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-stack-md">
        <div className="space-y-4">
          <Bar label="Cleanliness" value={breakdown.cleanliness} />
          <Bar label="Accuracy" value={breakdown.accuracy} />
        </div>
        <div className="space-y-4">
          <Bar label="Communication" value={breakdown.communication} />
          <Bar label="Location" value={breakdown.location} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {reviews.map((r) => (
          <div key={r.reviewerName} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-label-md">
                {r.reviewerName.charAt(0)}
              </div>
              <div>
                <p className="font-label-md text-label-md">{r.reviewerName}</p>
                <p className="text-caption text-on-surface-variant">{r.dateLabel}</p>
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant line-clamp-3">{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
