'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { modules, calculatePrice } from './_utils/data';
import QuoteForm from './_utils/quote-form';

export default function QuotePage() {
  const [userCount, setUserCount] = useState(10);
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();

  const totalPrice = calculatePrice(userCount, selectedModules, isYearly);

  const handleRegister = () => {
    const quoteData = { userCount, selectedModules, isYearly, totalPrice };
    router.push(`/quote/confirm?data=${encodeURIComponent(JSON.stringify(quoteData))}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Yêu cầu báo giá</h1>
      <p className="mb-4 text-gray-600">
        Hơn 60 tính năng được tích hợp với 200+ tính năng tùy chỉnh, dự án 8 triệu người dùng trên 200 quốc gia tin tưởng sử dụng.
      </p>

      <div className="flex justify-between items-start mb-4">
        <div>
          <label>Chọn số lượng người dùng</label>
          <input
            type="number"
            value={userCount}
            onChange={(e) => setUserCount(Number(e.target.value))}
            min="1"
            className="border p-2 ml-2"
          />
          <span> - {125000 * userCount} đ/tháng</span>
        </div>
        <div className="border p-2">
          <div>
            <label>
              <input
                type="checkbox"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
              />{' '}
              Hàng năm
            </label>
            <div>Hàng tháng</div>
          </div>
          <p>10 Người dùng: {totalPrice.toLocaleString()} đ</p>
          <p>1 Người dùng: {(totalPrice / 10).toLocaleString()} đ</p>
          <p>Tổng /tháng (2): {(totalPrice / 12).toLocaleString()} đ</p>
          <p>(2) Tổng hàng năm: {(totalPrice * 2).toLocaleString()} đ</p>
          <p>Dự tính chi phí triển khai: 1.920.000 đ</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-2 w-full" onClick={handleRegister}>
            Đăng ký
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Công cụ</h2>
        <div className="flex flex-wrap gap-2">
          {modules.filter(m => ['Thảo luận', 'Ghi chú', 'Danh bạ', 'Lịch', 'Dashboards'].includes(m.name)).map((module) => (
            <div key={module.id} className="flex items-center border p-2 rounded">
              <input
                type="checkbox"
                checked={selectedModules.includes(module.id)}
                onChange={(e) =>
                  setSelectedModules(
                    e.target.checked
                      ? [...selectedModules, module.id]
                      : selectedModules.filter((id) => id !== module.id)
                  )
                }
              />
              <span className="ml-2">{module.name} - {module.price} đ/tháng</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Bán hàng</h2>
        <div className="flex flex-wrap gap-2">
          {modules.filter(m => ['CRM', 'Bán hàng', 'Quản lý dịch vụ'].includes(m.name)).map((module) => (
            <div key={module.id} className="flex items-center border p-2 rounded">
              <input
                type="checkbox"
                checked={selectedModules.includes(module.id)}
                onChange={(e) =>
                  setSelectedModules(
                    e.target.checked
                      ? [...selectedModules, module.id]
                      : selectedModules.filter((id) => id !== module.id)
                  )
                }
              />
              <span className="ml-2">{module.name} - {module.price} đ/tháng</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Quản lý kho & sản xuất</h2>
        <div className="flex flex-wrap gap-2">
          {modules.filter(m => ['Quản lý kho', 'Sản xuất', 'Mua hàng', 'Báo trí', 'Chất lượng'].includes(m.name)).map((module) => (
            <div key={module.id} className="flex items-center border p-2 rounded">
              <input
                type="checkbox"
                checked={selectedModules.includes(module.id)}
                onChange={(e) =>
                  setSelectedModules(
                    e.target.checked
                      ? [...selectedModules, module.id]
                      : selectedModules.filter((id) => id !== module.id)
                  )
                }
              />
              <span className="ml-2">{module.name} - {module.price} đ/tháng</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Kế toán</h2>
        <div className="flex flex-wrap gap-2">
          {modules.filter(m => ['Kế toán VAS', 'Hóa đơn', 'Chi phí', 'Tài liệu', 'Chí ký'].includes(m.name)).map((module) => (
            <div key={module.id} className="flex items-center border p-2 rounded">
              <input
                type="checkbox"
                checked={selectedModules.includes(module.id)}
                onChange={(e) =>
                  setSelectedModules(
                    e.target.checked
                      ? [...selectedModules, module.id]
                      : selectedModules.filter((id) => id !== module.id)
                  )
                }
              />
              <span className="ml-2">{module.name} - {module.price} đ/tháng</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Nhân sự</h2>
        <div className="flex flex-wrap gap-2">
          {modules.filter(m => ['Nhân viên', 'Tuyển dụng', 'Nghỉ phép', 'Đánh giá', 'Thời gian biểu'].includes(m.name)).map((module) => (
            <div key={module.id} className="flex items-center border p-2 rounded">
              <input
                type="checkbox"
                checked={selectedModules.includes(module.id)}
                onChange={(e) =>
                  setSelectedModules(
                    e.target.checked
                      ? [...selectedModules, module.id]
                      : selectedModules.filter((id) => id !== module.id)
                  )
                }
              />
              <span className="ml-2">{module.name} - {module.price} đ/tháng</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}