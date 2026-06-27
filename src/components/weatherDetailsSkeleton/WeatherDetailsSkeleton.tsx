import { Skeleton } from "antd";

const WeatherDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-12 mt-7 gap-4">
      <aside className="col-span-3 row-span-2 rounded-lg bg-white/10 p-4">
        <div className="flex justify-between items-center mb-4">
          <Skeleton.Input active size="small" style={{ width: 120 }} />
          <Skeleton.Button active size="small" />
        </div>

        <div className="space-y-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/10 rounded-lg p-3"
            >
              <Skeleton.Avatar active shape="circle" />
              <Skeleton.Input active size="small" style={{ width: 50 }} />
              <Skeleton.Input active size="small" style={{ width: 70 }} />
            </div>
          ))}
        </div>
      </aside>

      <section className="col-span-9 justify-self-end w-full">
        <div className="rounded-lg bg-white/10 p-6">
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      </section>

      <section className="col-span-9">
        <section className="flex justify-between gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex-1 rounded-lg bg-white/10 p-4">
              <Skeleton active paragraph={{ rows: 1 }} />
            </div>
          ))}
        </section>

        <section className="mt-8">
          <Skeleton.Input
            active
            size="small"
            style={{ width: 140, marginBottom: 16 }}
          />

          <div className="flex justify-between gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="flex-1 rounded-lg bg-white/10 p-4">
                <Skeleton.Avatar
                  active
                  shape="circle"
                  size={48}
                  style={{ marginBottom: 12 }}
                />

                <Skeleton
                  active
                  title={false}
                  paragraph={{ rows: 2, width: ["80%", "60%"] }}
                />
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default WeatherDetailsSkeleton;
