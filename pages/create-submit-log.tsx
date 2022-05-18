import type { NextPage } from 'next';
import { CalendarIcon, ClipboardCopyIcon, CheckIcon, XIcon } from '@heroicons/react/solid';

function handleClickCopy() {
  alert('복사 완료! ✔');
}

const CreateSubmitLog: NextPage = () => {
  return (
    <>
      <div>
        <div className="mt-3 ml-3 mb-3 mr-3 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-gray-600">☕ 서밋 로그 생성기</span>
              </h2>
              <div className="mt-2 ml-2 flex items-center text-sm text-gray-500">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                update : 2022-05-18
              </div>
              <div className="mt-2 ml-2 flex items-center text-sm text-gray-500">
                <ClipboardCopyIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                입력폼대로 입력 후, 복사!
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="col-span-3 sm:col-span-2">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-700" aria-hidden="true" />
                  <XIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-700" aria-hidden="true" />
                  키워드
                </div>
                <input
                  type="text"
                  name="input-keyword"
                  id="input-keyword"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="예) 강화"
                />
              </div>
              <div className="py-3"></div>

              <div className="col-span-6 sm:col-span-3">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-700" aria-hidden="true" />
                  <XIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-700" aria-hidden="true" />
                  한줄요약
                </div>
                <input
                  type="text"
                  name="input-summary"
                  id="input-summary"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="얘) 연출 수정"
                />
              </div>
              <div className="py-3"></div>

              <div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-700" aria-hidden="true" />
                  <XIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-700" aria-hidden="true" />
                  설명
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-description"
                    name="textarea-description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="설명을 입력하세요."
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="py-3"></div>

              <div>
                <div className="flex items-center">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-700" aria-hidden="true" />
                    <XIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-700" aria-hidden="true" />
                    영향범위
                  </div>
                  <input id="checkbox-impact" name="checkbox-impact" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <div className="block text-sm text-gray-900">없음</div>
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-impact"
                    name="textarea-impact"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="영향범위를 입력하세요."
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="py-3"></div>

              <div>
                <div className="flex items-center">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-700" aria-hidden="true" />
                    <XIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-700" aria-hidden="true" />
                    테스트 건의
                  </div>
                  <input id="checkbox-test" name="checkbox-test" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <div className="block text-sm text-gray-900">없음</div>
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-test"
                    name="textarea-test"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="테스트 건의를 입력하세요."
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-7">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="block text-sm font-medium text-gray-700">결과</div>
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-result"
                    name="textarea-result"
                    rows={10}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-gray-400"
                    defaultValue={'[이슈키워드]: ""\n[영향범위]:\n[테스트건의]:'}
                    disabled
                  />
                </div>
              </div>

              <div className="py-4 text-right">
                <button
                  onClick={handleClickCopy}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <ClipboardCopyIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  복사하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubmitLog;
