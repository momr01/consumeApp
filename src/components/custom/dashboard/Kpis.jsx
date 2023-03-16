import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
// import KpiSkeletonLoading from "../../pages/component/KpiSkeletonLoading";
// import {
//   getKpiNumberOfOrders,
//   getKpiAmountOfOrders,
//   getOrdersProgrammed,
//   getExcessInventory,
//   selectTotalNumberOfOrders,
//   selectTotalAmountOfOrders,
//   selectOrdersProgrammed,
//   selectExcessInventory,
//   selectSkeletonNumberOrders,
//   selectSkeletonAmountOrders,
//   selectSkeletonOrdersProgrammed,
//   selectSkeletonExcessInventoy,
// } from "../../store/slice/kpiSlice";

function Kpis() {
  const { t } = useTranslation();
  //   const dispatch = useDispatch();
  //   const kpiTotalNumberOfOrders = useSelector(selectTotalNumberOfOrders);
  //   const kpiTotalAmountOfOrders = useSelector(selectTotalAmountOfOrders);
  //   const kpiOrdersProgrammed = useSelector(selectOrdersProgrammed);
  //   const kpiExcessInventory = useSelector(selectExcessInventory);
  //   const LoadingNumberOrders = useSelector(selectSkeletonNumberOrders);
  //   const loadingAmountOrders = useSelector(selectSkeletonAmountOrders);
  //   const loadingOrdersProgrammed = useSelector(selectSkeletonOrdersProgrammed);
  //   const loadingExcessInventory = useSelector(selectSkeletonExcessInventoy);

  //   useEffect(() => {
  //     dispatch(getKpiNumberOfOrders());
  //     dispatch(getKpiAmountOfOrders());
  //     dispatch(getOrdersProgrammed());
  //     dispatch(getExcessInventory());
  //   }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto bg-white mb-5">
      <div className="max-w-full mx-4 py-0 sm:mx-auto sm:px-6 lg:px-0">
        <div className="sm:flex sm:space-x-4">
          {/* {!LoadingNumberOrders ? ( */}
          <section className="inline-block align-bottom rounded-lg border-slate-300 md:border-r text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <p className="text-3xl font-bold text-black">
                    52,591 <span className="text-base">kWh</span>
                    {/* {kpiTotalNumberOfOrders.orders_in_past_due} */}
                  </p>
                  <h3 className="text-sm leading-6 font-bold text-primary">
                    {t("dashboard.consume")}
                  </h3>
                  {/* {!kpiTotalNumberOfOrders.length ? ( */}

                  {/* ) : (
                      <p className="text-3xl font-bold text-black">Sin datos</p>
                    )} */}
                  <p className="text-max font-bold">+ 11,706.00 (22.26%)</p>
                </div>
              </div>
            </div>
          </section>
          {/* ) : (
            <KpiSkeletonLoading />
          )} */}

          {/* {!loadingAmountOrders ? ( */}
          <section className="inline-block align-bottom rounded-lg border-slate-300 md:border-r text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <p className="text-3xl font-bold text-black">
                    52,591 <span className="text-base">kW</span>
                    {/* {kpiTotalNumberOfOrders.orders_in_past_due} */}
                  </p>
                  <h3 className="text-sm leading-6 font-bold text-primary">
                    {t("dashboard.consume")}
                  </h3>
                  {/* {!kpiTotalNumberOfOrders.length ? ( */}

                  {/* ) : (
                      <p className="text-3xl font-bold text-black">Sin datos</p>
                    )} */}
                  <p className="text-min font-bold">- 11,706.00 (22.26%)</p>
                </div>
              </div>
            </div>
          </section>
          {/* ) : (
            <KpiSkeletonLoading />
          )} */}

          {/* {!loadingOrdersProgrammed ? ( */}
          <section className="inline-block align-bottom rounded-lg border-slate-300 md:border-r text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <p className="text-3xl font-bold text-black">
                    52,591 <span className="text-base">kW</span>
                    {/* {kpiTotalNumberOfOrders.orders_in_past_due} */}
                  </p>
                  <h3 className="text-sm leading-6 font-bold text-primary">
                    {t("dashboard.consume")}
                  </h3>
                  {/* {!kpiTotalNumberOfOrders.length ? ( */}

                  {/* ) : (
                      <p className="text-3xl font-bold text-black">Sin datos</p>
                    )} */}
                  <p className="text-min font-bold">- 11,706.00 (22.26%)</p>
                </div>
              </div>
            </div>
          </section>
          {/* ) : (
            <KpiSkeletonLoading />
          )} */}

          {/* {!loadingExcessInventory ? ( */}
          <section className="inline-block align-bottom rounded-lg text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <p className="text-3xl font-bold text-black">
                    52,591 <span className="text-base">kW</span>
                    {/* {kpiTotalNumberOfOrders.orders_in_past_due} */}
                  </p>
                  <h3 className="text-sm leading-6 font-bold text-primary">
                    {t("dashboard.consume")}
                  </h3>
                  {/* {!kpiTotalNumberOfOrders.length ? ( */}

                  {/* ) : (
                      <p className="text-3xl font-bold text-black">Sin datos</p>
                    )} */}
                  <p className="text-min font-bold">- 11,706.00 (22.26%)</p>
                </div>
              </div>
            </div>
          </section>
          {/* ) : (
            <KpiSkeletonLoading />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Kpis;
