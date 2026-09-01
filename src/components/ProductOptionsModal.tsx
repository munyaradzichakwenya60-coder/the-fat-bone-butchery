import React, { useState } from "react";
import { X, Plus, Minus, Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export interface SelectedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string | null;
  description?: string;
  options?: string[];
}

interface ProductOptionsModalProps {
  product: SelectedProduct | null;
  onClose: () => void;
}

export function ProductOptionsModal({ product, onClose }: ProductOptionsModalProps) {
  const { addItem, formatPrice } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>(
    product?.options ? product.options[0] : "Standard Cut"
  );
  const [specialNote, setSpecialNote] = useState("");
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const defaultOptions = product.options || [
    "Standard Cut (~1 inch)",
    "Thick Braai Cut (1.5 inch)",
    "Stewing Cubes",
    "Coarse Mince Ground",
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: `$${product.price.toFixed(2)}`,
      quantity: quantity,
      image: product.image,
      cutOption: `${selectedOption}${specialNote ? ` (${specialNote})` : ""}`,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-paper border border-ink/20 shadow-2xl max-w-lg w-full rounded-sm overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-ink/10 flex items-center justify-between bg-cream/70">
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-brand/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">Select Cut Options</span>
            <span className="h-px w-4 bg-brand/50" />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-4 items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded border border-ink/10 shrink-0"
            />
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-ink leading-snug">{product.name}</h3>
              <p className="text-sm font-semibold text-brand">{formatPrice(product.price)}</p>
              <p className="text-xs text-ink/60">
                100% pasture-raised, grass-fed & antibiotic-free from Zimbabwe ranches.
              </p>
            </div>
          </div>

          {/* Cutting / Preparation Style */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-ink/80 block">
              Butcher Cutting Style:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {defaultOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedOption(opt)}
                  className={`p-2.5 text-left text-xs border rounded transition-all flex items-center justify-between ${
                    selectedOption === opt
                      ? "border-brand bg-brand/5 font-semibold text-brand"
                      : "border-ink/15 hover:border-ink/40 text-ink/75"
                  }`}
                >
                  <span>{opt}</span>
                  {selectedOption === opt && <Check className="h-3.5 w-3.5 text-brand shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-ink/80 block">
              Quantity / Packs:
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-ink/20 rounded bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-ink/70 hover:text-brand transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 text-sm font-semibold min-w-[32px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-ink/70 hover:text-brand transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-xs text-ink/60 font-medium">
                Total: <span className="font-bold text-ink">{formatPrice(product.price * quantity)}</span>
              </span>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-ink/80 block">
              Custom Cutting Instructions (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Separate into 500g vacuum packs, trim fat, etc."
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              className="w-full bg-white border border-ink/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-brand"
            />
          </div>
        </div>

        <div className="p-6 border-t border-ink/10 bg-cream/70 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] border border-ink/25 text-ink hover:border-brand hover:text-brand transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] bg-brand text-brand-foreground hover:bg-ink transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>{added ? "Added to Box!" : `Add to Box — ${formatPrice(product.price * quantity)}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
