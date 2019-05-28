let x = 'global';
function f() {
  let x = 'local';
  function g() {
    document.write(x);
  }
  g();
}

function makefunc(x) {
  return function() {
    return x;
  };
}
var a = [makefunc(0), makefunc(1), makefunc(8)];
console.log(a[2]());
/*
8.8.4.1. Примеры замыканий
 */
function inspect(inspector, title) {
  var expression, result;
  if ('ignore' in arguments.callee) return;
  while (true) {
    // Определить, как вывести запрос перед пользователем
    var message = '';
    // Если задан аргумент title, вывести его первым
    if (title) message = title + '\n';
    // Если выражение уже вычислено, вывести его вместе с его значением
    if (expression) message += '\n' + expression + ' ==> ' + result + '\n';
    else expression = '';
    // Типовое приглашение к вводу всегда должно выводиться:
    message += 'Введите выражение, которое следует вычислить:';
    // Получить ввод пользователя, вывести приглашение и использовать
    // последнее выражение как значение по умолчанию.
    expression = prompt(message, expression);
    // Если пользователь ничего не ввел (или щелкнул на кнопке Отменить),
    // работу в точке останова можно считать оконченной
    // и вернуть управление.
    if (!expression) return;
    // В противном случае вычислить выражение с использованием
    // замыкания в инспектируемом контексте исполнения.
    // Результаты будут выведены на следующей итерации.
    result = inspector(expression);
  }
}
function factorial(n) {
  // Создать замыкание для этой функции
  var inspector = function($) {
    return eval($);
  };
  inspect(inspector, 'Вход в функцию factorial()');
  var result = 1;
  while (n > 1) {
    result = result * n;
    n--;
    inspect(inspector, 'factorial( ) loop');
  }
  inspect(inspector, 'Выход из функции factorial()');
  return result;
}

// factorial();

/*
8.2.2.
*/
// проверка количества аргументов, которые передаются
function args(x, y, z) {
  if (arguments.length !== 3) {
    throw new Error(
      'Function args called with ' + arguments.length + ' arguments, but need 3 arguments'
    );
  }
  return x + y - z;
}

function chekargs(x, y, z) {
  var actual = arguments.length;
  console.log(arguments);
  console.log(arguments.callee);
  var expected = arguments.callee.length;
  console.log(actual, expected);
  if (actual != expected) {
    throw new Error(
      'Function args called with ' + actual + ' arguments, but need ' + expected + ' arguments'
    );
  }
  return x + y + z;
}

/*
8.6.3. apply and call:
*/

let obj = {
  prop1: 5,
  prop2: 'string'
};

function add(x) {
  return x * x;
}

document.write(add.call(obj, obj.prop1) + '</br>');
document.write(add.apply(obj, [obj.prop1]));
