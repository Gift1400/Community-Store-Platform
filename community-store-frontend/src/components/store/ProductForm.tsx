import { type FormEvent, useState } from 'react';
import type { Product } from '../../types/product';
import ProductImage from './ProductImage';
import './store.css';

export interface ProductFormValues {
  productName: string;
  description: string;
  price: number;
  quantity: number;
  condition: string;
  listingType: string;
  ecoFriendly: boolean;
  status: string;
  imageUrl?: string;
}

interface ProductFormProps {
  // Present when editing an existing listing.
  initial?: Product;
  // Suggestions for the free-text fields, taken from existing listings so
  // new ones stay consistent with what is already in the store.
  conditionOptions: string[];
  listingTypeOptions: string[];
  statusOptions: string[];
  submitLabel: string;
  submitting: boolean;
  error: string | null;
  onSubmit: (values: ProductFormValues) => void;
}

export default function ProductForm({
  initial,
  conditionOptions,
  listingTypeOptions,
  statusOptions,
  submitLabel,
  submitting,
  error,
  onSubmit,
}: ProductFormProps) {
  const [productName, setProductName] = useState(initial?.productName ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [price, setPrice] = useState(initial ? String(initial.price) : '');
  const [quantity, setQuantity] = useState(initial ? String(initial.quantity) : '1');
  const [condition, setCondition] = useState(initial?.condition ?? '');
  const [listingType, setListingType] = useState(initial?.listingType ?? '');
  const [status, setStatus] = useState(initial?.status ?? 'Available');
  const [imageUrl, setImageUrl] = useState(initial?.imageUrl ?? '');
  const [ecoFriendly, setEcoFriendly] = useState(initial?.ecoFriendly ?? false);
  const [validation, setValidation] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const priceNum = Number(price);
    const quantityNum = Number(quantity);

    if (!productName.trim() || !description.trim()) {
      setValidation('Please enter a name and a description.');
      return;
    }
    if (!Number.isFinite(priceNum) || priceNum < 0) {
      setValidation('Price must be zero or more.');
      return;
    }
    if (!Number.isInteger(quantityNum) || quantityNum < 0) {
      setValidation('Quantity must be a whole number, zero or more.');
      return;
    }
    if (!condition.trim() || !listingType.trim() || !status.trim()) {
      setValidation('Please fill in condition, listing type and status.');
      return;
    }

    const trimmedUrl = imageUrl.trim();
    if (trimmedUrl && !/^https?:\/\//i.test(trimmedUrl)) {
      setValidation('Image URL must start with http:// or https://');
      return;
    }

    setValidation(null);
    onSubmit({
      productName: productName.trim(),
      description: description.trim(),
      price: priceNum,
      quantity: quantityNum,
      condition: condition.trim(),
      listingType: listingType.trim(),
      ecoFriendly,
      status: status.trim(),
      imageUrl: trimmedUrl || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div>
        <label htmlFor="pf-name">Item name</label>
        <input id="pf-name" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>

      <div>
        <label htmlFor="pf-desc">Description</label>
        <textarea id="pf-desc" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="product-form__row">
        <div>
          <label htmlFor="pf-price">Price (R)</label>
          <input id="pf-price" type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="pf-qty">Quantity</label>
          <input id="pf-qty" type="number" min="0" step="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
      </div>

      <div className="product-form__row">
        <div>
          <label htmlFor="pf-condition">Condition</label>
          <input id="pf-condition" type="text" list="pf-condition-list" value={condition} onChange={(e) => setCondition(e.target.value)} />
          <datalist id="pf-condition-list">
            {conditionOptions.map((o) => (
              <option key={o} value={o} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="pf-listing">Listing type</label>
          <input id="pf-listing" type="text" list="pf-listing-list" value={listingType} onChange={(e) => setListingType(e.target.value)} />
          <datalist id="pf-listing-list">
            {listingTypeOptions.map((o) => (
              <option key={o} value={o} />
            ))}
          </datalist>
        </div>
      </div>

      <div>
        <label htmlFor="pf-status">Status</label>
        <input id="pf-status" type="text" list="pf-status-list" value={status} onChange={(e) => setStatus(e.target.value)} />
        <datalist id="pf-status-list">
          {statusOptions.map((o) => (
            <option key={o} value={o} />
          ))}
        </datalist>
      </div>

      <div>
        <label htmlFor="pf-image">Image URL (optional)</label>
        <input
          id="pf-image"
          type="text"
          placeholder="https://..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <ProductImage src={imageUrl.trim() || undefined} alt="Preview" className="product-form__preview" />
      </div>

      <div className="product-form__check">
        <input id="pf-eco" type="checkbox" checked={ecoFriendly} onChange={(e) => setEcoFriendly(e.target.checked)} />
        <label htmlFor="pf-eco">Eco-friendly</label>
      </div>

      {(validation || error) && <p className="form-error">{validation ?? error}</p>}

      <button type="submit" className="btn btn-primary" disabled={submitting} style={{ alignSelf: 'flex-start' }}>
        {submitting ? 'Saving…' : submitLabel}
      </button>
    </form>
  );
}
