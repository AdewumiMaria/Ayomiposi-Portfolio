import { Boxes, Database, Gauge, KeyRound } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import HoverLift from "@/components/animations/HoverLift";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { SYSTEM_LAYERS } from "@/data/stack";

// NOTE: Icons are keyed by layer id rather than stored in data/stack.ts — keeping
// components out of the data file lets it stay importable from anywhere.
const LAYER_ICONS = {
  architecture: Boxes,
  data: Database,
  auth: KeyRound,
  performance: Gauge,
} as const;

const SystemGrid = () => {
  return (
    <Section muted>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SYSTEM_LAYERS.map((layer, layerIndex) => {
          const LayerIcon = LAYER_ICONS[layer.id];

          return (
            <Reveal
              key={layer.id}
              delay={layerIndex * 0.07}
              // The lead layer spans the full row on wide screens.
              className={layer.featured ? "sm:col-span-2 lg:col-span-3" : undefined}
            >
              <HoverLift>
                <div className="theme-fade flex h-full flex-col border border-line bg-surface p-6 transition-colors hover:border-royal md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {layer.title}
                    </h2>
                    <LayerIcon className="size-5 shrink-0 text-royal" />
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">
                    {layer.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default SystemGrid;
