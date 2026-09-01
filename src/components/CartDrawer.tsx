import React from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, MessageCircle, MapPin, Truck, Store, Globe } from "lucide-react";
import { useCart, BULAWAYO_AREAS } from "@/lib/cart-context";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    deliveryType,
    setDeliveryType,
    deliverySuburb,
    setDeliverySuburb,
    deliveryAddress,
    setDeliveryAddress,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    instructions,
    setInstructions,
    formatPrice,
    getWhatsAppUrl,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-paper border-l border-ink/15 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-ink/10 bg-cream/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">Your Meat Hamper</h3>
                <p className="text-[11px] text-ink/60 uppercase tracking-widest">
                  {items.length === 0 ? "Empty Cart" : `${items.length} unique cut${items.length > 1 ? "s" : ""}`}
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-sand flex items-center justify-center text-ink/40">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h4 className="font-display text-xl font-semibold text-ink">Your bag is empty</h4>
                <p className="text-sm text-ink/65 max-w-xs mx-auto">
                  Browse our grass-fed cuts, boerewors, or butcher boxes to start your order.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] bg-brand text-brand-foreground hover:bg-ink transition-colors"
                >
                  Explore Cuts
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Cuts & Boxes</span>
                    <button
                      onClick={clearCart}
                      className="text-[10px] uppercase tracking-wider text-ink/40 hover:text-brand transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="divide-y divide-ink/10 border-y border-ink/10">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.cutOption || ""}`} className="py-3.5 flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded border border-ink/10 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-display text-sm font-semibold text-ink leading-tight line-clamp-1">
                            {item.name}
                          </h5>
                          {item.cutOption && (
                            <p className="text-[11px] text-brand/90 font-medium">{item.cutOption}</p>
                          )}
                          <p className="text-xs text-ink/60 mt-0.5">{formatPrice(item.price)} each</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-ink/20 rounded bg-white">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1.5 text-ink/70 hover:text-brand transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 text-ink/70 hover:text-brand transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1.5 text-ink/35 hover:text-brand transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fulfillment Selection */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Fulfillment Method</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setDeliveryType("delivery")}
                      className={`p-2.5 text-center rounded border transition-all flex flex-col items-center gap-1 ${
                        deliveryType === "delivery"
                          ? "border-brand bg-brand/5 text-brand font-semibold"
                          : "border-ink/15 hover:border-ink/40 text-ink/70"
                      }`}
                    >
                      <Truck className="h-4 w-4" />
                      <span className="text-[10px] uppercase tracking-wider">BYO Delivery</span>
                    </button>

                    <button
                      onClick={() => setDeliveryType("pickup")}
                      className={`p-2.5 text-center rounded border transition-all flex flex-col items-center gap-1 ${
                        deliveryType === "pickup"
                          ? "border-brand bg-brand/5 text-brand font-semibold"
                          : "border-ink/15 hover:border-ink/40 text-ink/70"
                      }`}
                    >
                      <Store className="h-4 w-4" />
                      <span className="text-[10px] uppercase tracking-wider">Shop Pickup</span>
                    </button>

                    <button
                      onClick={() => setDeliveryType("diaspora")}
                      className={`p-2.5 text-center rounded border transition-all flex flex-col items-center gap-1 ${
                        deliveryType === "diaspora"
                          ? "border-brand bg-brand/5 text-brand font-semibold"
                          : "border-ink/15 hover:border-ink/40 text-ink/70"
                      }`}
                    >
                      <Globe className="h-4 w-4" />
                      <span className="text-[10px] uppercase tracking-wider">Diaspora UK</span>
                    </button>
                  </div>

                  {deliveryType === "pickup" ? (
                    <div className="p-3 bg-sand/60 border border-ink/10 rounded text-xs text-ink/80 flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Pickup Location:</span>
                        129 Fort Street (btwn 13th & 14th Ave), Bulawayo. Ready in 45 mins.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div>
                        <label className="text-[11px] font-medium text-ink/70 block mb-1">
                          Bulawayo Suburb
                        </label>
                        <select
                          value={deliverySuburb}
                          onChange={(e) => setDeliverySuburb(e.target.value)}
                          className="w-full bg-white border border-ink/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-brand"
                        >
                          {BULAWAYO_AREAS.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>

                      <input
                        type="text"
                        placeholder="Street Address / House No."
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full bg-white border border-ink/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-brand"
                      />
                    </div>
                  )}
                </div>

                {/* Customer Details */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Your Details</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-ink/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-brand"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white border border-ink/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-brand"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Custom cutting / packaging notes (e.g. 1kg bags, thick braai cut)"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    className="w-full bg-white border border-ink/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-brand"
                  />
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-ink/10 bg-cream/90 space-y-4">
              <div className="space-y-1.5 text-xs text-ink/75">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-ink">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {deliveryType === "pickup" ? "Pickup Fee" : "Local Bulawayo Delivery"}
                  </span>
                  <span className="font-semibold text-ink">
                    {deliveryType === "pickup"
                      ? "FREE"
                      : deliveryFee === 0
                      ? "FREE (Over $50)"
                      : formatPrice(deliveryFee)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-ink pt-2 border-t border-ink/10">
                  <span className="font-display">Total Estimate</span>
                  <span className="font-display text-brand text-base">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Order via WhatsApp CTA */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold uppercase tracking-[0.16em] text-[11px] transition-colors shadow-sm rounded"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Place Order via WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <p className="text-[10px] text-center text-ink/50 leading-relaxed">
                Orders are freshly cut at 129 Fort St, vacuum sealed, and sent directly to your phone for confirmation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
